import { ImageResponse } from '@vercel/og'

export const config = {
    runtime: 'experimental-edge',
}

export async function GET() {
    return new ImageResponse(
        (
            <div>
                hello world!
            </div>
        )
    );
};
