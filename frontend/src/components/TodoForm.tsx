import React, { useContext } from "react";
import { FormInput } from "../types/types";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputError from "./InputError";
import { TodoContext } from "../providers/TodoProvider";
import { Button } from "./styles/Button.styled";
import { Form } from "./styles/Form.styled";
import { Input } from "./styles/Input.styled";

const schema = yup.object({
  text: yup.string().required()
}).required();

export default function TodoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
    resolver: yupResolver(schema)
  });

  const { createTodo } = useContext(TodoContext)

  const onSubmit = (data: FormInput) => {
    createTodo(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("text", {required: true})} placeholder='Insira a tarefa de hoje' />
      <Button type="submit" >Criar</Button>
      {errors.text && <InputError/>}
    </Form>
  );
}