import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  return (
    <VideoCard title={"Learn any stack in just 10 days | Hack yourself into learning a new tech stack"} author={"Iron Ape"} views={"100K"} timestamp={"2 years ago"} avatar={"iron_ape.jpeg"} thumbnail={"ecofront.png"} />
  );
}
