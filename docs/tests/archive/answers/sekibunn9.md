---
title: 置換積分③ - 解答
description: 積分テストNo.9の解答と解説
level: classified
---

# 置換積分③ - 解答

1. $\log(x + \sqrt{x^2 + 9}) + C$

    !!! note "解説"
        $\begin{align}
        t &= x + \sqrt{x^2 + 9}, \quad \frac{dt}{dx} = 1 + \frac{2x}{2\sqrt{x^2 + 9}} \quad (dx = \frac{1}{\sqrt{x^2 + 9}}dt) \\
        \int \frac{1}{\sqrt{x^2 + 9}} dx &= \int \frac{1}{t} dt \\
        &= \log|t| + C \\
        &= \log(x + \sqrt{x^2 + 9}) + C
        \end{align}$

2. $5\log(x + \sqrt{x^2 - 4}) + C$

    !!! note "解説"
        $\begin{align}
        t &= x + \sqrt{x^2 - 4}, \quad \frac{dt}{dx} = 1 + \frac{2x}{2\sqrt{x^2 - 4}} \quad (dx = \frac{1}{\sqrt{x^2 - 4}}dt) \\
        \int \frac{5}{\sqrt{x + 2}\sqrt{x - 2}} dx &= 5 \int \frac{1}{\sqrt{x^2 - 4}} dx \\
        &= 5 \int \frac{1}{t} dt \\
        &= 5\log|t| + C \\
        &= 5\log(x + \sqrt{x^2 - 4}) + C
        \end{align}$

3. $7\log(3 + 2\sqrt{2})$

    !!! note "解説"
        $\begin{align}
        t &= x + \sqrt{x^2 - 1}, \quad \frac{dt}{dx} = 1 + \frac{2x}{2\sqrt{x^2 - 1}} \quad (dx = \frac{1}{\sqrt{x^2 - 1}}dt) \\
        \int_{1}^{3} \frac{7}{\sqrt{x^2 - 1}} dx &= 7 \int_{1}^{3 + 2\sqrt{2}} \frac{1}{t} dt \\
        &= 7\left[\log|t|\right]_{1}^{3 + 2\sqrt{2}} \\
        &= 7(\log(3 + 2\sqrt{2}) - \log 1) \\
        &= 7\log(3 + 2\sqrt{2})
        \end{align}$

4. $\frac{1}{2}\log\left(\frac{2 + \sqrt{3}}{2 - \sqrt{3}}\right)$

    !!! note "解説"
        $\begin{align}
        x &= \sin \theta, \quad \frac{dx}{d\theta} = \cos \theta \quad (dx = \cos \theta d\theta) \\
        \int_{0}^{\frac{\sqrt{3}}{2}} \frac{1}{\sqrt{1 - x^2}} dx &= \int_{0}^{\frac{\pi}{3}} \frac{1}{\sqrt{1 - \sin^2 \theta}} \cos \theta d\theta \\
        &= \int_{0}^{\frac{\pi}{3}} \frac{1}{\cos \theta} d\theta \\
        &= \left[\frac{1}{2}\log\left(\frac{1 + \sin \theta}{1 - \sin \theta}\right)\right]_{0}^{\frac{\pi}{3}} \\
        &= \frac{1}{2}\log\left(\frac{2 + \sqrt{3}}{2 - \sqrt{3}}\right)
        \end{align}$

5. $\frac{\pi}{4}$

    !!! note "解説"
        $\begin{align}
        x &= 5\tan \theta, \quad \frac{dx}{d\theta} = \frac{5}{\cos^2 \theta} \quad (dx = \frac{5}{\cos^2 \theta} d\theta) \\
        \int_{0}^{5} \frac{5}{x^2 + 25} dx &= \int_{0}^{\frac{\pi}{4}} \frac{5}{25\tan^2 \theta + 25} \frac{5}{\cos^2 \theta} d\theta \\
        &= \int_{0}^{\frac{\pi}{4}} \frac{1}{\tan^2 \theta + 1} \frac{1}{\cos^2 \theta} d\theta \\
        &= \int_{0}^{\frac{\pi}{4}} \frac{1}{\frac{1}{\cos^2 \theta}} \frac{1}{\cos^2 \theta} d\theta \\
        &= \int_{0}^{\frac{\pi}{4}} d\theta \\
        &= \left[\theta\right]_{0}^{\frac{\pi}{4}} \\
        &= \frac{\pi}{4}
        \end{align}$

!!! note "参考資料"
    [置換積分法の公式やパターン](https://univ-juken.com/chikan-sekibun){:target="_blank"}