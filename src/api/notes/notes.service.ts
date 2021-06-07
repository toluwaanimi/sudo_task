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

    async getNote(id){
        const note = await this.noteModel.findOne(id);
        if(!note){
            throw new NotFoundException('Note not found')
        }
        return note
    }

    async publishNote(id){
      const note =  await this.getNote(id)
        await this.noteModel.updateOne({id},{
            published : !note.published
        })
        return;
    }

    async deleteNote(id){
        await this.getNote(id)
        await this.noteModel.findOneAndRemove({id})
        return;
    }
}
