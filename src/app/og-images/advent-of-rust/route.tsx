import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    const siteUrl = process.env.NODE_ENV == "development" ? "http://localhost:3000/" : 'https://rustfinity-og.vercel.app/';
    const { searchParams } = req.nextUrl;
    const day = searchParams.get("day");
    const description = searchParams.get("description");

    const geistBold = fetch(new URL(siteUrl + 'Geist/ttf/Geist-Bold.ttf')).then((res) => res.arrayBuffer(),);
    const geistBoldFontData = await geistBold;

    const geistRegular = fetch(new URL(siteUrl + 'Geist/ttf/Geist-Regular.ttf')).then((res) => res.arrayBuffer(),);
    const geistRegularFontData = await geistRegular;

    return new ImageResponse(
        (
            <div tw="h-full w-full rounded-md flex items-center justify-top bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex-col" style={{ backgroundColor: 'black' }}>

                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img alt=''
                    tw='h-[50] w-[50]  mt-[70] mb-[40]'
                    src={`${siteUrl}/rustfinity-logo.png`}
                />

                <h1 tw="text-6xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 flex" style={{ backgroundImage: "linear-gradient(#fafafa, #a3a3a3)", color: "transparent", backgroundClip: "text", fontWeight: 700 }}>
                    {day}
                </h1>

                <h1 tw="text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 flex" style={{ backgroundImage: "linear-gradient(#fafafa, #a3a3a3)", color: "transparent", backgroundClip: "text", fontWeight: 400 }}>
                    {description}
                </h1>

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
        //debug: true,
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
