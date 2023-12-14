import React from "react";
import Svg, { G, Mask, Path, Defs, ClipPath, Rect, Pattern, Use, Image } from "react-native-svg"

export const FoodSvg = ({ color, height, width }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={23}
            height={25}
            fill="none"
        >
            <G clipPath="url(#a)">
                <Mask
                    id="b"
                    width={88}
                    height={83}
                    x={-33}
                    y={-28}
                    maskUnits="userSpaceOnUse"
                    style={{
                        maskType: "luminance",
                    }}
                >
                    <Path
                        fill="#fff"
                        d="M-32.16-11.356 35.313-27.45l19.672 65.498-67.473 16.095-19.672-65.499ZM5.587-2.367 3.283-1.322c-1.253.594-1.756 1.32-1.78 2.718-.036 2.012.785 5.153 2.084 8.251.565 1.348 1.556 3.122 2.323 3.93.533.561 1.198.84 1.915.966L2.331 23.92l4.61 2.615 4.745-8.105 4.933 8.497 2.287-1.19 2.348-1.166-6.558-11.277.093-.162c.174-.05.299-.074.489-.135.813-.258 2.048-.677 3.013-1.457 1.127-.912 2.148-2.465 2.814-3.584.464-.777.382-.52 1.188-2.184l.834-1.716L20.738 3l.026-.05L16.153.346l-.026.051-2.168-1.51L12.882.465c-1.081 1.58-.797 1.204-1.304 2.086-.464.807-1.037 1.882-1.414 2.95L5.587-2.367Z"
                    />
                </Mask>
                <G mask="url(#b)">
                    <Path
                        fill={color}
                        d="M11.058 2.529c-.929-.01-1.87.09-2.802.313C2.29 4.265-1.148 10.139.592 15.93c1.739 5.791 8.01 9.344 13.975 7.921 5.966-1.423 9.407-7.294 7.668-13.085-1.468-4.886-6.163-8.182-11.177-8.237Zm.07 1.869c4.156.039 8.024 2.751 9.244 6.812 1.446 4.813-1.39 9.654-6.348 10.837-4.957 1.182-10.128-1.748-11.573-6.561-1.446-4.813 1.393-9.644 6.351-10.827a9.626 9.626 0 0 1 2.325-.261Zm.047 1.676a7.754 7.754 0 0 0-1.884.21c-4.013.957-6.334 4.907-5.164 8.802 1.17 3.895 5.396 6.29 9.409 5.333 4.012-.957 6.333-4.914 5.163-8.809-.987-3.286-4.15-5.5-7.524-5.536Zm.066 1.856c2.518.022 4.856 1.663 5.595 4.124.876 2.917-.838 5.844-3.843 6.56-3.004.717-6.12-1.059-6.996-3.975-.876-2.917.832-5.83 3.837-6.547.469-.112.94-.166 1.407-.162Z"
                    />
                </G>
                <Path
                    fill={color}
                    d="M16.967 2.78 13.83 7.856 4.344 23.204l1.514.817 9.486-15.349 3.137-5.075-1.514-.817Z"
                />
                <Path
                    fill={color}
                    d="M14.596 1.462s-.631.882-1.317 2.006c-.687 1.124-1.45 2.449-1.713 3.697-.198.941-.049 1.862.092 2.657.14.795.32 1.416.32 1.416l1.805-.828s-.147-.558-.272-1.262c-.125-.703-.179-1.596-.112-1.915.132-.626.788-1.927 1.42-2.962a32.077 32.077 0 0 1 1.22-1.848l-1.443-.961Z"
                />
                <Path
                    fill={color}
                    d="m20.898 4.854-1.617-.68s-.464.878-1.112 1.906c-.648 1.027-1.534 2.208-2.05 2.623-.265.213-1.132.613-1.856.86-.724.247-1.321.395-1.321.395l.112 1.881s.677-.164 1.495-.443c.818-.279 1.763-.618 2.55-1.251 1.037-.835 1.885-2.111 2.589-3.227.703-1.116 1.21-2.064 1.21-2.064ZM10.916 10.242 5.036.104 4.42.398c-.734.35-.775.408-.806 1.15-.072 1.739.579 4.418 1.794 7.384.5 1.219 1.376 2.736 1.884 3.26.795.821 1.606 1.088 2.37.78.287-.114.568-.316.76-.543.056-.068.264.277 2.571 4.266l4.16 7.195.647-.328.646-.328-7.529-12.992Z"
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M0 .046h22.826v23.987H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export const HomeSvg = ({ color, height, width }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={23}
            fill="none"
        >
            <Path
                fill={color}
                d="M10.951.287.317 9.997a.998.998 0 0 0-.235.328.95.95 0 0 0-.082.387v10.373c.003.261.114.511.31.696.196.184.46.29.737.292h21.282c.28 0 .547-.103.746-.288a.972.972 0 0 0 .315-.7V10.712a.95.95 0 0 0-.082-.387.997.997 0 0 0-.235-.328L12.425.287a1.092 1.092 0 0 0-.737-.282c-.275 0-.54.102-.737.282Zm.744 2.106 9.573 8.748v8.943H2.108v-8.93l9.587-8.76Z"
            />
        </Svg>
    );
}

export const ShortsSvg = ({ color, height, width }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={28}
            fill="none"
        >
            <Rect
                width={25.825}
                height={20}
                x={1}
                y={26.911}
                stroke={color}
                strokeWidth={2}
                rx={4}
                transform="rotate(-90 1 26.91)"
            />
            <Path
                stroke={color}
                strokeWidth={2}
                d="M10.172 10.446a1 1 0 0 1 1.656 0l4.063 6.006a1 1 0 0 1-.828 1.56H6.937a1 1 0 0 1-.828-1.56l4.063-6.006Z"
            />
        </Svg>
    );
}

export const WorkoutSvg = ({ color, height, width }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={24}
            fill="none"
        >
            <Path
                fill={color}
                fillRule="evenodd"
                d="M5.002 10.52a1.105 1.105 0 0 0-.367-.228 1.225 1.225 0 0 0-1.248.248L.339 13.39a1.06 1.06 0 0 0-.339.758c-.003.282.114.55.325.746L1.55 16.04l-1 .936c-.108.1-.194.219-.254.35a.99.99 0 0 0 .231 1.161l4.764 4.454c.212.196.5.302.801.297.301-.005.591-.122.807-.325l1-.935 1.225 1.146c.21.197.496.306.798.304.301-.003.592-.117.81-.317l3.047-2.85c.108-.1.194-.22.254-.35.06-.13.09-.27.093-.41a.99.99 0 0 0-.325-.751l-8.8-8.23Zm-.841 2.277 7.214 6.747-1.41 1.318-1.225-1.146a1.106 1.106 0 0 0-.367-.228 1.225 1.225 0 0 0-1.248.249l-.993.928-3.178-2.973.992-.928c.217-.201.342-.472.347-.754a1.002 1.002 0 0 0-.317-.75l-1.225-1.145 1.41-1.319Z"
                clipRule="evenodd"
            />
            <Path
                fill={color}
                d="M15.442 6.027a1.104 1.104 0 0 0-.367-.228 1.226 1.226 0 0 0-1.248.249l-7.41 6.93c-.108.1-.194.219-.253.35a.99.99 0 0 0 .231 1.161l3.163 2.958c.104.098.229.175.367.227a1.225 1.225 0 0 0 1.248-.249l7.41-6.93c.108-.1.194-.218.253-.349a.991.991 0 0 0-.231-1.161l-3.163-2.958Zm-.841 2.277 1.577 1.475-5.78 5.406-1.577-1.476 5.78-5.405Z"
            />
            <Path
                fill={color}
                d="M19.709.547a1.149 1.149 0 0 0-.798-.304 1.213 1.213 0 0 0-.81.317l-1 .936L15.876.35a1.106 1.106 0 0 0-.367-.228 1.226 1.226 0 0 0-1.248.249l-3.04 2.842c-.108.1-.194.22-.254.35-.06.13-.09.27-.093.41a.99.99 0 0 0 .325.751l8.8 8.23c.104.098.228.175.366.228a1.226 1.226 0 0 0 1.248-.249l3.04-2.843c.108-.1.194-.219.254-.35.06-.13.09-.27.093-.41a.99.99 0 0 0-.325-.75L23.45 7.432l1-.935c.213-.202.335-.472.34-.752.003-.28-.11-.547-.318-.744L19.71.547Zm-.841 2.262 3.178 2.972-1 .936a1.061 1.061 0 0 0-.34.757c-.002.282.115.55.325.746l1.226 1.146-1.418 1.326-7.214-6.748 1.417-1.325 1.226 1.146c.21.194.496.3.795.296.3-.003.588-.117.805-.317l1-.935Z"
            />
        </Svg>
    );
}

export const AppleSvg = ({ color, height, width }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={42}
            fill="none"
        >
            <G clipPath="url(#a)">
                <Path
                    fill="#838383"
                    d="M28.396 22.184c.058 6.319 5.543 8.422 5.604 8.448-.046.149-.876 2.997-2.89 5.94-1.74 2.543-3.546 5.078-6.392 5.13-2.796.052-3.695-1.658-6.891-1.658s-4.195 1.606-6.841 1.71c-2.747.104-4.838-2.751-6.593-5.285-3.586-5.185-6.326-14.65-2.647-21.039 1.828-3.173 5.095-5.182 8.64-5.233 2.697-.052 5.243 1.814 6.892 1.814 1.648 0 4.741-2.244 7.993-1.914 1.362.056 5.183.55 7.637 4.142-.197.122-4.56 2.662-4.512 7.945ZM23.14 6.667C24.6 4.902 25.581 2.445 25.313 0c-2.102.084-4.643 1.4-6.151 3.165-1.351 1.562-2.534 4.062-2.215 6.459 2.343.181 4.736-1.19 6.194-2.957Z"
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M0 0h34v41.836H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export const GoogleSvg = ({ color, height, width }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={67}
            height={67}
            fill="none"
        >
            <Path
                fill="#4280EF"
                d="M53.6 33.991c0-1.384-.134-2.814-.357-4.154H33.902v7.906h11.077a9.319 9.319 0 0 1-4.109 6.209l6.61 5.137c3.887-3.618 6.12-8.89 6.12-15.098Z"
            />
            <Path
                fill="#34A353"
                d="M33.902 54.002c5.539 0 10.184-1.831 13.579-4.958l-6.611-5.092c-1.831 1.25-4.199 1.965-6.968 1.965-5.36 0-9.871-3.618-11.524-8.442l-6.79 5.226a20.482 20.482 0 0 0 18.314 11.301Z"
            />
            <Path
                fill="#F6B704"
                d="M22.378 37.43a12.456 12.456 0 0 1 0-7.86l-6.79-5.271c-2.903 5.806-2.903 12.64 0 18.402l6.79-5.27Z"
            />
            <Path
                fill="#E54335"
                d="M33.902 21.127a11.185 11.185 0 0 1 7.861 3.082l5.852-5.896c-3.708-3.484-8.621-5.36-13.713-5.315a20.482 20.482 0 0 0-18.313 11.3l6.789 5.271c1.653-4.868 6.164-8.442 11.524-8.442Z"
            />
        </Svg>
    );
}

export const LogoSvg = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={105}
            height={95}
            fill="none"
        >
            <Mask
                id="b"
                width={105}
                height={95}
                x={0}
                y={0}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <Path
                    fill="url(#a)"
                    d="M0 37.261h85v63.75H0z"
                    transform="rotate(-26 0 37.261)"
                />
            </Mask>
            <G mask="url(#b)">
                <Path
                    fill="url(#c)"
                    d="M0 37.261h85v63.75H0z"
                    transform="rotate(-26 0 37.261)"
                />
            </G>
            <Defs>
                <Pattern
                    id="a"
                    width={1}
                    height={1}
                    patternContentUnits="objectBoundingBox"
                >
                    <Use xlinkHref="#d" transform="scale(.0061 .00813)" />
                </Pattern>
                <Pattern
                    id="c"
                    width={1}
                    height={1}
                    patternContentUnits="objectBoundingBox"
                >
                    <Use xlinkHref="#e" transform="scale(.0061 .00813)" />
                </Pattern>
                <Image
                    xlinkHref="data:image/png;base64,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"
                    id="d"
                    width={164}
                    height={123}
                />
                <Image
                    xlinkHref="data:image/png;base64,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"
                    id="e"
                    width={164}
                    height={123}
                />
            </Defs>
        </Svg>
    )
}
