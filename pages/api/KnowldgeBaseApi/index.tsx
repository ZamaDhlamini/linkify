import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

export async function getStaticProps() {
const API_KEY = process.env.BUTTERCMS_API_KEY

const req = await fetch(`https://api.buttercms.com/v2/pages/*/buttercms_demo_kb_home/?auth_token=${API_KEY}`)

const { data: pageData } = await req.json()
 return {
   props: {
     pageData,
   }
 }
}