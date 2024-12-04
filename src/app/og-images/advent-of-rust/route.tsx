import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server';
import { load } from 'cheerio';

export const config = {
    runtime: 'experimental-edge',
}

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const day = searchParams.get("key");
    const pageUrl = `https://www.rustfinity.com/practice/rust/challenges/${day}/description`;
    const response = await fetch(pageUrl);
    const html = await response.text();

    // Load the HTML into cheerio for parsing
    const $ = load(html);

    const title = $('meta[property="og:title"]').attr('content');
    const description = $('meta[property="og:description"]').attr('content');

    return new ImageResponse(
        (
            <div tw='flex flex-col'>
                <p> {title} </p>
                <p> {description} </p>
            </div>
        ), {
        debug: true
    }
    );
};
