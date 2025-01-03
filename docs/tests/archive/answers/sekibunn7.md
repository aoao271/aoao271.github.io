---
title: 置換積分① - 解答
description: 積分テストNo.7の解答と解説
level: classified
---

# 置換積分① - 解答

1. $\dfrac{3}{4}(x^2 + 7)^2 + C$

    !!! note "解説"
        $\begin{align}
        \int 3x(x^2 + 7) \, dx & = \int \frac{3}{2}(x^2 + 7)'(x^2 + 7) \, dx \\
        & = \dfrac{3}{2}\dfrac{1}{2}(x^2 + 7)^2 \\
        & = \dfrac{3}{4}(x^2 + 7)^2 + C
        \end{align}$

2. $\log|x^2 + 3| + C$

    !!! note "解説"
        $\begin{align}
        \int \dfrac{2x}{x^2 + 3} \, dx & = \int \dfrac{(x^2 + 3)'}{x^2 + 3} \, dx \\
        & = \log|x^2 + 3| + C
        \end{align}$

3. $\dfrac{\sin^6 x}{6} + C$

    !!! note "解説"
        $\begin{align}
        \int \sin^5 x\cos x \, dx & = \int \sin^5 x(\sin x)' \, dx \\
        & = \dfrac{\sin^6 x}{6} + C
        \end{align}$

4. $\dfrac{1}{8}(e^{-2} - 1)$

    !!! note "解説"
        $\begin{align}
        \int_{-1}^{0} x^3e^{2x^4 - 2} \, dx & = \int_{-1}^{0} \dfrac{1}{8}(2x^4 - 2)'e^{2x^4 - 2} \, dx \\
        & = \left[ \dfrac{1}{8}e^{2x^4 - 2} \right]_{-1}^{0} \\
        & = \dfrac{1}{8}e^{-2} - \dfrac{1}{8} \\
        & = \dfrac{1}{8}(e^{-2} - 1)
        \end{align}$

5. $9$

    !!! note "解説"
        $\begin{align}
        \int_{0}^{9} \dfrac{x}{\sqrt{81 - x^2}} \, dx & = \int_{0}^{9} \dfrac{-\frac{1}{2}(81 - x^2)'}{\sqrt{81 - x^2}} \, dx \\
        & = \left[ -\sqrt{81 - x^2} \right]_{0}^{9} \\
        & = 0 - (-9) \\
        & = 9
        \end{align}$

!!! note "参考資料"
    [置換積分法の公式やパターン](https://univ-juken.com/chikan-sekibun){:target="_blank"}