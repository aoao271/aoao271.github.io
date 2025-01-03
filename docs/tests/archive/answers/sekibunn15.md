---
title: 積分テストNo.15 - 解答
description: 積分テストNo.15の解答と解説
level: classified
---

# 積分テストNo.15 - 解答

1. $3^x\log3 + C$

2. $\dfrac{2^x}{\log2}\left( x^2 - \dfrac{2x}{\log2} + \dfrac{2}{(\log2)^2} \right) + C$

    !!! note "解説"
        この積分は $2^x$ と $x^2$ の部分積分を用いるため、以下のリンクの方法を参考にしています：
        [瞬間部分積分](https://manabitimes.jp/math/823){:target="_blank"}。

3. $\sqrt{2} - 1$

    !!! note "解説"
        $\begin{align}
        \int_{0}^{1} \frac{1}{x^2 + 1} dx &= \int_{0}^{1} \frac{1}{\left(x + \frac{1}{2}\right)^2 - \frac{1}{4}} dx \\
        &= -2 \int_{0}^{1} \left(\frac{1}{x + \frac{3}{4}} - \frac{1}{x + \frac{1}{4}}\right) dx \\
        &= -2 \left[\log\left|\frac{x + \frac{3}{4}}{x + \frac{1}{4}}\right|\right]_{0}^{1} \\
        &= -2 \left(\log\frac{7}{5} - \log3\right) \\
        &= -2 \left(\log7 - \log5 - \log3\right)
        \end{align}$

4. $\dfrac{1}{3}\log2 - \dfrac{\sqrt{3}}{9}\pi$

    !!! note "解説"
        $\begin{align}
        \int_{0}^{1} \frac{1}{x^3 + 1} dx &= \frac{1}{3}\left(\int_{0}^{1} \frac{1}{x + 1} dx - \int_{0}^{1} \frac{x - 2}{x^2 - x + 1} dx\right) \\
        I_1 &= \int_{0}^{1} \frac{1}{x + 1} dx = \log2 \\
        I_2 &= \int_{0}^{1} \frac{x - 2}{x^2 - x + 1} dx = -\frac{\sqrt{3}}{3}\pi \\
        \therefore \int_{0}^{1} \frac{1}{x^3 + 1} dx &= \frac{1}{3}\left(\log2 - \frac{\sqrt{3}}{3}\pi\right) \\
        &= \frac{1}{3}\log2 - \frac{\sqrt{3}}{9}\pi
        \end{align}$

5. $\dfrac{\pi}{8} + \dfrac{5\sqrt{2}}{2} - \dfrac{35}{12}$

    !!! note "解説"
        $\begin{align}
        \int_{0}^{1} \left(x^2 + \frac{x}{\sqrt{1 + x^2}}\right)\left(1 + \frac{x}{(1 + x^2)\sqrt{1 + x^2}}\right) dx &= \int_{0}^{1} x^2 + \frac{2x^3 + x}{(1 + x^2)\sqrt{1 + x^2}} + \frac{x^2}{(1 + x^2)^2} dx
        \end{align}$

!!! note "参考資料"
    [これだよ](https://manabitimes.jp/math/1320){:target="_blank"}