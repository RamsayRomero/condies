export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className='my-4' role='alert'>
      Something went wrong :(
      <pre className='whitespace-normal text-sm mt-1'>{error.message}</pre>
      <button
        className='my-2 px-2 py-1 bg-indigo-600 text-white rounded'
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}
