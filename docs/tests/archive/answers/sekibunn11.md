---
title: 三角関数の有理式の積分 - 解答
description: 積分テストNo.11の解答と解説
level: classified
---

# 三角関数の有理式の積分 - 解答

1. $\tan \frac{x}{2} + C$

    !!! note "解説"
        $\begin{align}
        \int \frac{1}{1 + \cos x} dx &= \int \frac{1}{1 + \frac{1 - t^2}{1 + t^2}} \cdot \frac{2}{1 + t^2} dt \\
        &= \int \frac{1}{\frac{2}{1 + t^2}} \cdot \frac{2}{1 + t^2} dt \\
        &= \int dt \\
        &= t + C \\
        &= \tan \frac{x}{2} + C
        \end{align}$

2. $\log|\tan \frac{x}{2}| + C$

    !!! note "解説"
        $\begin{align}
        \int \frac{1}{\sin x} dx &= \int \frac{1 + t^2}{2t} \cdot \frac{2}{1 + t^2} dt \\
        &= \int \frac{1}{t} dt \\
        &= \log|t| + C \\
        &= \log|\tan \frac{x}{2}| + C
        \end{align}$

3. $\log|1 + \tan \frac{x}{2}| + C$

    !!! note "解説"
        $\begin{align}
        \int \frac{1}{\sin x + \cos x + 1} dx &= \int \frac{1}{\frac{2t}{1 + t^2} + \frac{1 - t^2}{1 + t^2} + 1} \cdot \frac{2}{1 + t^2} dt \\
        &= \int \frac{1}{\frac{2(t + 1)}{1 + t^2}} \cdot \frac{2}{1 + t^2} dt \\
        &= \int \frac{1}{t + 1} dt \\
        &= \log|t + 1| + C \\
        &= \log|\tan \frac{x}{2} + 1| + C
        \end{align}$

4. $\log\left|\frac{1 + \tan \frac{x}{2}}{1 - \tan \frac{x}{2}}\right| + C$

    !!! note "解説"
        $\begin{align}
        \int \frac{1}{\cos x} dx &= \int \frac{1 + t^2}{1 - t^2} \cdot \frac{2}{1 + t^2} dt \\
        &= \int \frac{2}{1 - t^2} dt \\
        &= \int \frac{2}{(1 + t)(1 - t)} dt \\
        &= \int \left(\frac{1}{1 + t} + \frac{1}{1 - t}\right) dt \\
        &= \log|1 + t| - \log|1 - t| + C \\
        &= \log\left|\frac{1 + \tan \frac{x}{2}}{1 - \tan \frac{x}{2}}\right| + C
        \end{align}$

5. $\log|\tan \frac{x}{2}| - 2\log|\tan \frac{x}{2} + 1| + C$

    !!! note "解説"
        $\begin{align}
        \int \frac{1 - \sin x}{\sin x \cos x} dx &= \int \frac{1 - \frac{2t}{1 + t^2}}{\frac{2t}{1 + t^2} \cdot \frac{1 - t^2}{1 + t^2}} \cdot \frac{2}{1 + t^2} dt \\
        &= \int \frac{\frac{t^2 - 2t + 1}{1 + t^2}}{\frac{t(1 - t^2)}{1 + t^2}} dt \\
        &= \int \frac{(t - 1)^2}{-t(t + 1)(t - 1)} dt \\
        &= \int \frac{-t + 1}{t(t + 1)} dt \\
        &= \int \frac{1}{t} - \frac{2}{t + 1} dt \\
        &= \log|t| - 2\log|t + 1| + C \\
        &= \log|\tan \frac{x}{2}| - 2\log|\tan \frac{x}{2} + 1| + C
        \end{align}$

!!! note "参考資料"
    [三角関数の有理式の積分 | 高校数学の美しい物語](https://manabitimes.jp/math/1308){:target="_blank"}