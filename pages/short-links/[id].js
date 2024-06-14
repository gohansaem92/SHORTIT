import Head from "next/head";
import ShortLinkForm, { ShortLinkFormType } from "@/components/ShortLinkForm";
import styles from "@/styles/ShortLinkEditPage.module.css";
import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import mongoose from "mongoose";

export async function getServerSideProps(context) {
  const { id } = context.query;
  await dbConnect();
  if (mongoose.Types.ObjectId.isValid(id)) {
    const objectId = new mongoose.Types.ObjectId(id);
    // objectId를 사용하여 데이터베이스 작업을 수행합니다.
    const shortLink = await ShortLink.findById(objectId);
    if (shortLink) {
      return {
        props: {
          shortLink: JSON.parse(JSON.stringify(shortLink)),
        },
      };
    } else {
        return {
          notFound: true,
        };
    }
  } else {
    console.error("유효하지 않은 ObjectId 형식입니다.");
  }
  return {
    notFound: true,
  };
}
export default function ShortLinkEditPage({ shortLink }) {
  const router = useRouter();
  const { id } = router.query;

  async function handleSubmit(values) {
    await axios.patch(`/short-links/${id}`, values);
    router.push(`/short-links/`);
  }

  return (
    <>
      <Head>
        <title>주소 수정하기 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>수정하기</h1>
        <ShortLinkForm
          type={ShortLinkFormType.Edit}
          initialValues={shortLink}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
