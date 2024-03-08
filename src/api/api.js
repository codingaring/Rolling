const BASE_URL = 'https://rolling-api.vercel.app/{4}-{10}/';

export const getRecipient = async ({ id }) => {
  const res = await fetch(`${BASE_URL}recipients/${id}/`);
  if (!res.ok) {
    throw new Error('recipient 정보를 불러오는데 실패하였습니다.');
  }
  const data = await res.json();
  return data;
};

export const deleteRecipient = async ({ id }) => {
  const res = await fetch(`${BASE_URL}recipients/${id}/`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('recipient를 삭제하는데 실패하였습니다.');
  }
};

export const deleteMessage = async ({ id }) => {
  const res = await fetch(`${BASE_URL}messages/${id}/`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('messages 삭제하는데 실패하였습니다.');
  }
};

export const getMessages = async ({ id, offset = 0, limit = 8 }) => {
  const res = await fetch(`${BASE_URL}recipients/${id}/messages/?limit=${limit}&offset=${offset}`);
  if (!res.ok) {
    throw new Error('messages를 불러오는데 실패하였습니다.');
  }
  const data = await res.json();
  return data;
};

export const getAllMessages = async ({ id }) => {
  const res = await fetch(`${BASE_URL}recipients/${id}/messages/`);
  if (!res.ok) {
    throw new Error('messages를 불러오는데 실패하였습니다.');
  }
  const data = await res.json();
  return data;
};

export const getReactions = async ({ id }) => {
  const res = await fetch(`${BASE_URL}recipients/${id}/reactions/`);
  if (!res.ok) {
    throw new Error('reactions를 불러오는데 실패하였습니다.');
  }
  const data = await res.json();
  return data;
};

export const createReaction = async ({ id, body }) => {
  const res = await fetch(`${BASE_URL}recipients/${id}/reactions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error('리액션을 생성하는데 실패하였습니다.');
  }

  const data = await res.json();
  return data;
};

export const getPopularRecipientList = async () => {
  const res = await fetch(`${BASE_URL}recipients/?sort=like`);

  if (!res.ok) {
    throw new Error('PopularRecipientList를 불러오는데 실패하였습니다.');
  }

  const data = await res.json();
  return data;
};

export const getRecipientList = async () => {
  const res = await fetch(`${BASE_URL}recipients/`);

  if (!res.ok) {
    throw new Error('recipientList를 불러오는데 실패하였습니다.');
  }

  const data = await res.json();
  return data;
};

export const postMessage = async ({ id, body }) => {
  const res = await fetch(`${BASE_URL}recipients/${id}/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error('메시지를 생성하는데 실패하였습니다.');
  }

  const data = await res.json();
  return data;
};
