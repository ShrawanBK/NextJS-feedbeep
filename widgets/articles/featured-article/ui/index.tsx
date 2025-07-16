import Image from "next/image";

export const FeaturedArticle = () => {
  return (
    <div className="mb-8">
      <div className="relative h-64 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white lg:h-80">
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
          alt="Featured story"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width={800}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute right-6 bottom-6 left-6">
          <div className="mb-3">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
              Featured Story
            </span>
          </div>
          <h2 className="mb-3 text-2xl leading-tight font-bold lg:text-3xl">
            The Future of AI: How Machine Learning is Reshaping Industries
          </h2>
          <p className="mb-4 max-w-2xl text-white/90">
            Explore the transformative impact of artificial intelligence across
            various sectors and what it means for the future of work and
            society.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span>Tech Weekly</span>
            <span>•</span>
            <span>1 hour ago</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};
