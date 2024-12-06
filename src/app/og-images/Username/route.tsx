import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    const siteUrl = process.env.NODE_ENV == "development" ? "http://localhost:3000/" : 'https://rustfinity-og.vercel.app/';
    const { searchParams } = req.nextUrl;
    const username = searchParams.get("username");
    const fullName = searchParams.get("fullName");
    const imageUrl = searchParams.get("imageUrl") ?? "";

    console.log(username);
    console.log(fullName);
    console.log(imageUrl);

    const geistBold = fetch(new URL(siteUrl + 'Geist/ttf/Geist-Bold.ttf')).then((res) => res.arrayBuffer(),);
    const geistBoldFontData = await geistBold;

    const geistRegular = fetch(new URL(siteUrl + 'Geist/ttf/Geist-Regular.ttf')).then((res) => res.arrayBuffer(),);
    const geistRegularFontData = await geistRegular;

    return new ImageResponse(
        (
            <div tw="h-full w-full rounded-md flex items-center justify-top bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex-row" style={{ backgroundColor: 'black' }}>

                <div tw='flex flex-col'>
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    <img alt=''
                        tw='h-[75] w-[75] rounded-full ml-[65] mr-[65]'
                        src={imageUrl}
                    />
                </div>

                <div tw='flex flex-col'>
                    <h1 tw="text-7xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 flex text-wrap mr-[450]" style={{ backgroundImage: "linear-gradient(#fafafa, #a3a3a3)", color: "transparent", backgroundClip: "text", fontWeight: 700 }}>
                        {fullName}
                    </h1>

                    <h1 tw="text-4xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 flex" style={{ backgroundImage: "linear-gradient(#fafafa, #a3a3a3)", color: "transparent", backgroundClip: "text", fontWeight: 400 }}>
                        rustfinity.com/{username}
                    </h1>
                </div>

                <div tw="absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center">
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    <img
                        alt="Vercel"
                        src={`${siteUrl}/background.svg`}
                        style={{ width: '100%', height: '100%', zIndex: "0", position: 'absolute', display: 'block', verticalAlign: 'middle', }}
                    />
                </div>
            </div>
        ), {
        width: 1200,
        height: 630,
        //debug: process.env.NODE_ENV == "development",
        fonts: [
            {
                name: 'GeistVF',
                data: geistBoldFontData,
                style: 'normal',
                weight: 700,
            },
            {
                name: 'GeistVF',
                data: geistRegularFontData,
                style: 'normal',
                weight: 400,
            },
        ],

    }
    );
};
