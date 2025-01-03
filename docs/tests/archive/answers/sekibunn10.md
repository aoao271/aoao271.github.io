---
title: 置換積分④ - 解答
description: 積分テストNo.10の解答と解説
level: classified
---

# 置換積分④ - 解答

1. $\dfrac{1}{5}(x + 5)^5 - \dfrac{5}{4}(x + 5)^4 + C$

    !!! note "解説"
        $\begin{align}
        x + 5 &= t \quad (x = t - 5), \quad \frac{dx}{dt} = 1 \\
        \int x(x + 5)^3 \, dx &= \int (t - 5)t^3 \, dt \\
        &= \int t^4 - 5t^3 \, dt \\
        &= \dfrac{1}{5}t^5 - \dfrac{5}{4}t^4 + C \\
        &= \dfrac{1}{5}(x + 5)^5 - \dfrac{5}{4}(x + 5)^4 + C
        \end{align}$

2. $\dfrac{1}{2}\log(e^{2x} + 2) + C$

    !!! note "解説"
        $\begin{align}
        e^{2x} + 2 &= t, \quad \frac{dt}{dx} = 2e^{2x} \quad (dt = 2e^{2x}dx) \\
        \int \dfrac{e^{2x}}{e^{2x} + 2} \, dx &= \int \dfrac{1}{t} \cdot \dfrac{1}{2} \cdot 2e^{2x} \, dx \\
        &= \dfrac{1}{2} \int \dfrac{1}{t} \, dt \\
        &= \dfrac{1}{2}\log|t| + C \\
        &= \dfrac{1}{2}\log(e^{2x} + 2) + C
        \end{align}$

3. $-\dfrac{1}{25\log x + 15} + C$

    !!! note "解説"
        $\begin{align}
        \log x &= t, \quad \frac{dt}{dx} = \frac{1}{x} \quad (dt = \frac{1}{x}dx) \\
        \int \dfrac{dx}{x(5\log x + 3)^2} &= \int \dfrac{dt}{(5t + 3)^2} \\
        &= \int (5t + 3)^{-2} \, dt \\
        &= -\dfrac{1}{5t + 3} \cdot \dfrac{1}{(5t + 3)'} + C \\
        &= -\dfrac{1}{25\log x + 15} + C
        \end{align}$

4. $-\dfrac{125}{6}$

    !!! note "解説"
        $\begin{align}
        x - 3 &= t \quad (x = t + 3), \quad \frac{dx}{dt} = 1 \\
        \int_{-2}^{3} (x - 3)(x + 2) \, dx &= \int_{-2}^{3} t(t + 5) \, dt \\
        &= \int_{-5}^{0} t^2 + 5t \, dt \\
        &= \left[\dfrac{1}{3}t^3 + \dfrac{5}{2}t^2 \right]_{-5}^{0} \\
        &= 0 - \left(-\dfrac{125}{3} + \dfrac{125}{2}\right) \\
        &= -\dfrac{125}{6}
        \end{align}$

5. $\dfrac{17}{480}$

    !!! note "解説"
        $\begin{align}
        \cos x &= t, \quad \frac{dt}{dx} = -\sin x \quad (dt = -\sin xdx) \\
        \int_{\frac{\pi}{3}}^{\frac{\pi}{2}} \sin^3 x\cos^2 x \, dx &= -\int_{\frac{\pi}{3}}^{\frac{\pi}{2}} \sin^2 x\cos^2 x(-\sin x) \, dx \\
        &= -\int_{\frac{\pi}{3}}^{\frac{\pi}{2}} (1 - \cos^2 x)\cos^2 x \, dt \\
        &= -\int_{1/2}^{0} (t^2 - t^4) \, dt \\
        &= \int_{0}^{1/2} (t^2 - t^4) \, dt \\
        &= \left[\dfrac{1}{3}t^3 - \dfrac{1}{5}t^5\right]_{0}^{1/2} \\
        &= \dfrac{1}{24} - \dfrac{1}{160} \\
        &= \dfrac{17}{480}
        \end{align}$

!!! note "参考資料"
    [置換積分法の公式やパターン](https://univ-juken.com/chikan-sekibun){:target="_blank"}