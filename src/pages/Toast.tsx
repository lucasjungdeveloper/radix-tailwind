import { useToast } from '../hooks/useToast'

export const Toast = () => {
  const toast = useToast()

  return (
    <main className="flex flex-1 items-center gap-4">
      <button
        onClick={() => {
          toast({
            title: 'Success',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'success',
          })
        }}
        className="h-fit rounded-lg bg-green-500 py-2 px-4 text-lg hover:bg-green-600"
      >
        Success
      </button>
      <button
        onClick={() => {
          toast({
            title: 'Error',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'error',
          })
        }}
        className="h-fit rounded-lg bg-red-500 py-2 px-4 text-lg hover:bg-red-600"
      >
        Error
      </button>
      <button
        onClick={() => {
          toast({
            title: 'Warning',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'warning',
          })
        }}
        className="h-fit rounded-lg bg-orange-500 py-2 px-4 text-lg hover:bg-orange-600"
      >
        Warning
      </button>
      <button
        onClick={() => {
          toast({
            /* Use id to avoid duplicates */
            id: 'app-info-toast',
            title: 'Info',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'info',
          })
        }}
        className="h-fit rounded-lg bg-blue-500 py-2 px-4 text-lg hover:bg-blue-600"
      >
        Info
      </button>
    </main>
  )
}
