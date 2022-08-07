type ERROR_CODE = {
  unique: number;
};

const SQLiteError: ERROR_CODE = {
  unique: 19,
} as const;

const MYSQLError: ERROR_CODE = {
  unique: 1062,
} as const;

export const ERROR_CODE =
  process.env.NODE_ENV === 'production' ? MYSQLError : SQLiteError;
