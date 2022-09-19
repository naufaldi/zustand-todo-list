import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Box,
  Heading,
  List,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useStore } from '../lib/store';
export default function Index() {
  const todos = useStore(useCallback((state) => state.todos, []));
  const addTodo = useStore((state) => state.addTodos);
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.floor(Math.random * 100) + 1,
      title: inputValue,
    };
    addTodo(todo);
    setInputValue('');
  };

  return (
    <Container mx='auto'>
      <h1>Helo Zustand</h1>
      <Box as='form' onSubmit={onSubmit} mb='10px'>
        <FormControl>
          <FormLabel>Input Todo</FormLabel>
          <Input type='text' value={inputValue} onChange={onChange} />
          <FormHelperText>what will you do.</FormHelperText>
        </FormControl>
      </Box>
      <Heading as='h2'>List To Do</Heading>
      <List mb='10px'>
        {todos.map((todo) => (
          <Box key={todo.id}>{todo.title}</Box>
        ))}
      </List>
    </Container>
  );
}
