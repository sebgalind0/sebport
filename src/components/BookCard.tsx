interface BookCardProps {
  title: string;
  description: string;
  image: string;
}

export function BookCard({ title, description, image }: BookCardProps) {
  return (
    <div className="flex flex-col gap-y-2 py-4 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-x-4">
        <div className="flex min-w-0 gap-x-4">
          <img
            className="h-24 w-16 flex-none rounded-md object-cover"
            src={image}
            alt={title}
          />
          <div className="min-w-0 flex-auto">
            <h3 className="font-semibold leading-6">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 