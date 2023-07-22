import React, { CSSProperties } from "react";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string | number;
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, width, height, border } = props;
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return <div className={`Skeleton ${className}`} style={styles}></div>;
};
