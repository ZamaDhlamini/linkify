type ImageLoadArgs = {
    src: string;
    width: number;
  };
  
  export const handleImageLoad = ({ src, width }: ImageLoadArgs) => {
    const splits = src.split('/');
    const img_hash = splits[splits.length - 1];
  
    return `https://cdn.buttercms.com/resize=width:${width}/${img_hash}`;
  };
  