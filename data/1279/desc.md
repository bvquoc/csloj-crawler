Trong bài toán này, bạn có hàm $f$ đối với $n$ biến số được định nghĩa như sau: $f(x_1,x_2,…,x_n)=(S^4+2×S^2)\text{ mod } 5 + 1$ trong đó $S = x_1+ x_2+⋯+x_n$.

Nhiệm vụ của bạn là tính tổng toàn bộ của các hàm $f$ với biến vào là $n$ số $x_i$ nằm trong khoảng từ $v_i$ tới $w_i$. Nói cách khác bạn cần tính:

$$∑_{x_1=v_1}^{w_1} ∑_{x_2=v_2}^{w_2}…∑_{x_n=v_n}^{w_n}f(x_1,x_2,…,x_n )$$

Ví dụ $n = 3$ và $v_1 = 2, w_1 = 3, v_2 = 10, w_2 = 12, v_3 = 17, w_3 = 17$ thì kết quả sẽ là $19$ vì $f(2, 10, 17) = 4$, $f(2, 11, 17) = 1$, $f(2, 12, 17) = 4$, $f(3, 10, 17) = 1$, $f(3, 11, 17) = 4$ và $f(3, 12, 17) = 5$.

## Dữ liệu vào:
- Gồm một dòng, đầu tiên là số nguyên dương $N\ (1≤N≤1000)$, tiếp theo là $N$ cặp số $v_i$ và $w_i\ (0≤v_i≤w_i≤ 100)$.

## Dữ liệu ra:
- Số nguyên duy nhất là kết quả của bài toán. Dữ liệu đảm bảo kết quả này luôn nhỏ hơn $10^6$.

## Ví dụ:
### Dữ liệu vào:
```
3 2 3 10 12 17 17
```

### Dữ liệu ra:
```
19
```

## Giới hạn:
- $20\%$ có $N≤6$;
- $20\%$ có $N≤20$;
- $20\%$ có $N≤100$;
- $20\%$ có $N≤200$;
- $20\%$ có $N≤1000$.