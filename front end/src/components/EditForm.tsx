import React, { Children, useContext, useEffect, useState } from "react";
import { FormInput } from "../types/types";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputError from "./InputError";
import { TodoContext } from "../providers/TodoProvider";
import Popup from "reactjs-popup";
import { AiOutlineEdit } from "react-icons/ai";
import { Button } from "./styles/Button.styled";
import { Input } from "./styles/Input.styled";
import { Form } from "./styles/Form.styled";

const schema = yup.object({
  text: yup.string().required()
}).required();

export default function EditForm({ dataInput }: {dataInput: FormInput}) {

  const { register, handleSubmit,formState: { errors } } = useForm<FormInput>({
    resolver: yupResolver(schema),
    defaultValues: dataInput
  });

  const { updateTodo } = useContext(TodoContext)

  const onSubmit = (data: FormInput) => {
    updateTodo(data)
  }
  
  return (
    <Popup trigger={<Button className="button"> <AiOutlineEdit /> </Button>} modal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("text", {required: true}) } placeholder='Insira a tarefa de hoje' />
          <Button type="submit" >Editar</Button>
          {errors.text && <InputError/>}
        </Form>
    </Popup>
  );
}
