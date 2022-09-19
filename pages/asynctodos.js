import { Box, Heading, List } from '@chakra-ui/react';
import React, { useCallback, useEffect } from 'react';
import { useAsyncStore } from '../lib/store';
export default function asynctodos() {
  const asyncTodos = useAsyncStore(
    useCallback((state) => state.asyncTodos, [])
  );

  const loading = useAsyncStore((state) => state.loading);
  const fetchTodos = useAsyncStore((state) => state.fetchTodos);
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  return (
    <>
      <Heading>Async Todos</Heading>
      {loading && ' Loading todos ...'}
      <List>
        {asyncTodos.map((todo) => (
          <Box key={todo.id}>{todo.title}</Box>
        ))}
      </List>
    </>
  );
}
