import React, { useEffect, useMemo, useRef, useState, memo, useCallback } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

const PRIMARY_BTN =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold " +
  "bg-[#FFD700] text-black hover:brightness-95 transition";

const CarouselSlide = memo(function CarouselSlide({ image, isActive, onCtaClick }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [image?.url]);

  const currentImageSrc = hasError
    ? "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
    : image?.url;

  return (
    <div className="relative w-full h-full flex-shrink-0">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
          <Loader2 className="w-8 h-8 text-[#1a3a52] animate-spin" />
        </div>
      )}

      <img
        src={currentImageSrc}
        alt={image?.alt || "Imagem do carrossel"}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        loading={isActive ? "eager" : "lazy"}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
        <div
          className={`transition-all duration-500 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
        >
          {image?.title && (
            <h3 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-md">
              {image.title}
            </h3>
          )}
          {image?.description && (
            <p className="text-gray-100 text-sm md:text-lg max-w-xl mb-6 drop-shadow-md font-medium">
              {image.description}
            </p>
          )}

          {image?.cta?.text && (
            <button className={PRIMARY_BTN} onClick={() => onCtaClick(image.cta)}>
              {image.cta.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

function shuffleArray(arr) {
  // Fisher–Yates (mais confiável que sort random)
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function BudgetCarousel({ images = [], autoPlayInterval = 6000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // 1) remove a 5ª imagem (index 4)
  // 2) embaralha 1 vez por mudança real de lista
  const displayImages = useMemo(() => {
    const filtered = images.filter((_, idx) => idx !== 4);
    return shuffleArray(filtered);
  }, [images]);

  const nextSlide = useCallback(() => {
    if (!displayImages.length) return;
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  }, [displayImages.length]);

  const prevSlide = useCallback(() => {
    if (!displayImages.length) return;
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  }, [displayImages.length]);

  // Autoplay (sem depender de setInterval recriado em loop)
  useEffect(() => {
    if (isPaused || displayImages.length === 0) return;

    intervalRef.current = setInterval(nextSlide, autoPlayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, displayImages.length, nextSlide, autoPlayInterval]);

  // Reset índice quando muda lista
  useEffect(() => setCurrentIndex(0), [displayImages.length]);

  // Teclado
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prevSlide, nextSlide]);

  const handleCtaClick = (cta) => {
    // Compatível com Hostinger:
    // - Se tiver url: abre (mesma aba)
    // - Se tiver hash: rola até id
    // - Se tiver targetId: rola até id
    if (!cta) return;

    if (cta.url) {
      window.location.href = cta.url;
      return;
    }

    const targetId =
      (typeof cta.path === "string" && cta.path.includes("#") && cta.path.split("#")[1]) ||
      cta.targetId;

    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!displayImages.length) return null;

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl group bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Destaques e Treinamentos"
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {displayImages.map((img, index) => (
          <CarouselSlide
            key={`${img?.url || "img"}-${index}`}
            image={img}
            isActive={index === currentIndex}
            onCtaClick={handleCtaClick}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 border border-white/10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 border border-white/10"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {displayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#FFD700] w-8" : "bg-white/50 hover:bg-white/80 w-2"
              }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}