import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from 'src/schema/notes.schema';


@Injectable()
export class NotesService {
    constructor(
        @InjectModel(Note.name)
        private noteModel :Model<NoteDocument>
    ){

    }

    async createNote(data){
        try{
            await this.noteModel.create({
                title : data.title,
                text : data.text,
                published : data.publish
            })
            return;
        }catch(e){
            throw new BadRequestException('Something went wrong')
        }
  
    }

    async getNotes(){
        return await this.noteModel.find({});
    }

    async getNote(_id){
        const note = await this.noteModel.findOne({_id : _id});
        if(!note){
            throw new NotFoundException('Note not found')
        }
        return note
    }

    async publishNote(_id){
      const note =  await this.getNote(_id)
        await this.noteModel.updateOne({_id},{
            published : !note.published
        })
        return;
    }

    async deleteNote(_id){
        await this.getNote(_id)
        await this.noteModel.findOneAndRemove({_id})
        return;
    }
}
