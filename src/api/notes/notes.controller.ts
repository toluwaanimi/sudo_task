import { Body, Controller, Param } from '@nestjs/common';
import { NoteDTO, ParamsDTO } from 'src/common/dto/note.dto';
import { Helper } from 'src/common/utilities/helper.utilities';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}



  async findAll(){
    const notes = await this.notesService.getNotes()
    return Helper.sendJsonResponse('Notes retrieved', notes)
  }

    async create(@Body() body :NoteDTO){
    await this.notesService.createNote(body)
    return Helper.sendJsonResponse('Note created successfully')
  }

  async findOne(@Param()params : ParamsDTO){
    const note = await this.notesService.getNote(params.id)
    return Helper.sendJsonResponse('Note retrieved', note)
  }


  async publishNote(@Param()params:ParamsDTO){
    await this.notesService.publishNote(params.id);
    return Helper.sendJsonResponse('Successful')
  }

  async deleteNote(@Param()params:ParamsDTO){
    await this.notesService.deleteNote(params.id);
    return Helper.sendJsonResponse('Successfully deleted note')
  }
}
