import React, { ReactNode } from "react";

type FirstHalfComponentProps = {
  header: string;
  text?: string;
  optionalDiv: boolean;
  optionalImg: boolean;
  photo?: string;
  photoText?: string;
  className?: string;
  spanText: boolean;
  spanLetter?: string;
  spanTextClassName?: string;
  headerClassName?: string;
  optionalDivClassName?: string;
  optionalImgClassName?: string;
  optionalImgDivClassName?: string;
  children?: ReactNode;
};

export const FirstHalfComponent: React.FC<FirstHalfComponentProps> = ({
  header,
  text,
  optionalDiv = false,
  optionalImg = false,
  spanText = false,
  className = "",
  spanLetter,
  headerClassName = "",
  optionalDivClassName = "",
  optionalImgDivClassName = "",
  optionalImgClassName = "",
  spanTextClassName = "",
  children,
  photo,
  photoText,
}) => {
  return (
    <div className={`${className}`}>
      {optionalImg && (
        <div className={`${optionalImgDivClassName}`}>
          <img
            src={photo}
            alt={photoText}
            className={`${optionalImgClassName}`}
          />
        </div>
      )}
      <p className={`${headerClassName}`}>
        {header}
        {spanText && (
          <span className={`${spanTextClassName}`}>{spanLetter}</span>
        )}
      </p>
      {optionalDiv && (
        <div
          className={`absolute top-0 left-0 sm:w-[60%] lgx:w-[40%] h-10 font-bold text-white flex justify-center items-center shadow-md shadow-gray-700 mt-4 rounded-e-md bg-[#EF4358] ${optionalDivClassName}`}>
          {text}
        </div>
      )}
      {children}
    </div>
  );
};

type ImageComponentProps = {
  img: string;
  imgText: string;
  className?: string;
  imgClassName?: string;
};

export const ImageComponent: React.FC<ImageComponentProps> = ({
  img,
  imgText,
  className = "",
  imgClassName = "",
}) => {
  return (
    <div className={`${className}`}>
      <img src={img} alt={imgText} className={`${imgClassName}`} />
    </div>
  );
};
