import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';


export type NoteDocument = Note & Document;


@Schema()
export class Note {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    text: string;

    @Prop({ default: false })
    published: boolean;


} 

export const NoteSchema = SchemaFactory.createForClass(Note);
