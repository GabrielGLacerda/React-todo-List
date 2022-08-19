import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './entities/todo.entity';


@Injectable()
export class TodosService {

  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  create(createTodoDto: CreateTodoDto) {
    const todo = new this.todoModel(createTodoDto);
    return todo.save();
  }

  findAll() {
    return this.todoModel.find();
  }

  findOne(id: string) {
    return this.todoModel.findById(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate({
      _id: id
    }, 
    {
      $set: updateTodoDto //quem eu quero salvar
    },
    {
      new: true //salva as alterações no banco de dados
    }
    );
  }

  remove(id: string) {
    return this.todoModel.findByIdAndDelete({
      _id: id
    })
    .exec();
  }
}
