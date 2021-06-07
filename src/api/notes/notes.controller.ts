import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NoteDTO, ParamsDTO } from 'src/common/dto/note.dto';
import { Helper } from 'src/common/utilities/helper.utilities';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}



  @Get()
  async findAll(){
    const notes = await this.notesService.getNotes()
    return Helper.sendJsonResponse('Notes retrieved', notes)
  }

  @Post()
    async create(@Body() body :NoteDTO){
    await this.notesService.createNote(body)
    return Helper.sendJsonResponse('Note created successfully')
  }

  @Get(':id')
  async findOne(@Param()params : ParamsDTO){
    const note = await this.notesService.getNote(params.id)
    return Helper.sendJsonResponse('Note retrieved', note)
  }


  @Put(':id')
  async publishNote(@Param()params:ParamsDTO){
    await this.notesService.publishNote(params.id);
    return Helper.sendJsonResponse('Successful')
  }

  @Delete(':id')
  async deleteNote(@Param()params:ParamsDTO){
    await this.notesService.deleteNote(params.id);
    return Helper.sendJsonResponse('Successfully deleted note')
  }
}
