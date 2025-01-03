---
title: 部分積分 - 解答
description: 積分テストNo.6の解答と解説
level: classified
---

# 部分積分 - 解答

1. $x\log x - x + C$

    !!! note "解説"
        $\begin{align}
        \int \log x dx & = x\log x - \int 1 dx \\
        & = x\log x - x + C
        \end{align}$

2. $-x^2\cos x + 2x\sin x + 2\cos x + C$

3. $\dfrac{\sin^2 x}{2} + C$

    !!! note "解説"
        $\int \sin x\cos x dx = I$ とすると
        $\begin{align}
        \int \sin x\cos x dx & = \sin^2 x - \int \sin x\cos x dx  \\
        I & = \sin^2 x - I \\
        2I & = \sin^2 x \\
        I & = \dfrac{\sin^2 x}{2} + C
        \end{align}$

4. $18\log 6 - \dfrac{35}{4}$

    !!! note "解説"
        $\begin{align}
        \int_{1}^{6} x\log x dx & = \left[ \dfrac{x^2}{2}\log x \right]_{1}^{6} - \int_{1}^{6} \dfrac{x}{2} dx \\
        & = \left[ \dfrac{x^2}{2}\log x \right]_{1}^{6} - \left[ \dfrac{x^2}{4} \right]_{1}^{6} \\
        & = \left[ \dfrac{x^2}{2}\log x - \dfrac{x^2}{4} \right]_{1}^{6} \\
        & = 18\log 6 - 9 - (-\dfrac{1}{4}) \\
        & = 18\log 6 - \dfrac{35}{4}
        \end{align}$

5. $2e^4 - 10$

    !!! note "解説"
        $\begin{align}
        \int_{0}^{4} (2 - x)^2 e^x dx & = \left[ (x^2 - 6x + 10)e^x \right]_{0}^{4} \\
        & = 2e^4 - 10
        \end{align}$

!!! note "参考資料"
    [部分積分の公式と覚え方，例題](https://manabitimes.jp/math/1548){:target="_blank"}