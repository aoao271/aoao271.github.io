---
title: 絶対値付き積分 - 解答
description: 積分テストNo.17の解答と解説
level: classified
---

# 絶対値付き積分 - 解答

1. $\dfrac{8\sqrt{2} - 4}{3}$

    !!! note "解説"
        $\begin{align}
        \int_{-2}^{0} |x^2 - 2| dx &= \int_{-2}^{-\sqrt{2}} (x^2 - 2) dx + \int_{-\sqrt{2}}^{0} -(x^2 - 2) dx \\
        &= \left[\frac{1}{3}x^3 - 2x\right]_{-2}^{-\sqrt{2}} - \left[\frac{1}{3}x^3 - 2x\right]_{-\sqrt{2}}^{0} \\
        &= \left(\frac{4\sqrt{2}}{3} - \frac{4}{3}\right) - \left(-\frac{4\sqrt{2}}{3}\right) \\
        &= \frac{8\sqrt{2} - 4}{3}
        \end{align}$

2. $1 - \frac{1}{e}$

    !!! note "解説"
        $\begin{align}
        \int_{\frac{1}{2e}}^{\frac{e}{2}} |\log 2x| dx &= \int_{\frac{1}{2e}}^{\frac{1}{2}} -(\log 2x) dx + \int_{\frac{1}{2}}^{\frac{e}{2}} \log 2x dx \\
        &= -\frac{1}{2}\left[2x\log 2x - 2x\right]_{\frac{1}{2e}}^{\frac{1}{2}} + \frac{1}{2}\left[2x\log 2x - 2x\right]_{\frac{1}{2}}^{\frac{e}{2}} \\
        &= -\frac{1}{2}(-1 + \frac{1}{e} + \frac{1}{e}) + \frac{1}{2}(e - e + 1) \\
        &= 1 - \frac{1}{e}
        \end{align}$

3. $6\log 3 + e^3 - 14$

    !!! note "解説"
        $\begin{align}
        \int_{0}^{3} |e^x - 3| dx &= \int_{0}^{\log 3} -(e^x - 3) dx + \int_{\log 3}^{3} (e^x - 3) dx \\
        &= -\left[e^x - 3x\right]_{0}^{\log 3} + \left[e^x - 3x\right]_{\log 3}^{3} \\
        &= -(3 - 3\log 3 - 1) + (e^3 - 9 - 3 + 3\log 3) \\
        &= 6\log 3 + e^3 - 14
        \end{align}$

4. $1$

    !!! note "解説"
        $\cos^2 x \sin x = (1 - \sin^2 x)\sin x = \sin x - \sin^3 x$ より、
        $\int_{-\pi}^{\frac{\pi}{2}} |\cos^2 x \sin x| dx = \int_{-\pi}^{0} -(\cos^2 x \sin x) dx + \int_{0}^{\frac{\pi}{2}} \cos^2 x \sin x dx$
        $= -\left[-\frac{1}{3}\cos^3 x\right]_{-\pi}^{0} + \left[-\frac{1}{3}\cos^3 x\right]_{0}^{\frac{\pi}{2}} = 1$

5. $\frac{10}{\log 3} + 9$

    !!! note "解説"
        $\begin{align}
        \int_{0}^{3} \sqrt{9^x - 2 \cdot 3^{x + 2} + 81} dx &= \int_{0}^{3} |3^x - 9| dx \\
        &= \int_{0}^{2} -(3^x - 9) dx + \int_{2}^{3} (3^x - 9) dx \\
        &= -\left[\frac{3^x}{\log 3} - 9x\right]_{0}^{2} + \left[\frac{3^x}{\log 3} - 9x\right]_{2}^{3} \\
        &= \frac{10}{\log 3} + 9
        \end{align}$

!!! note "参考資料"
    [これ(数Ⅱ)](https://examist.jp/mathematics/integral/zettaiti-teisekibun-kihon/){:target="_blank"} と [これ(数Ⅲ)](https://examist.jp/mathematics/integration/zettaititukiteisekibun/){:target="_blank"}