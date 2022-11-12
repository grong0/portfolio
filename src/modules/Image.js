import '../styles/Image.css';

export default function Image ( {src, fallback, type = "image/webp", alt} ) {
    return (
        <picture>
            <source srcSet={src} type={type} />
            <img src={fallback} alt={alt} />
        </picture>
    );
};