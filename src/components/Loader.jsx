import { useLottie } from "lottie-react";
import loadingAnimation from '../assets/loading.json'

export function Loader() {
    const lottieOptions = {
        animationData: loadingAnimation,
        loop: true,
        style: { width: 200, height: 200, margin: "auto" }
    };
    const { View } = useLottie(lottieOptions);

    return View;
}