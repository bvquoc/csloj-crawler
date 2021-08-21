Cho số nguyên $x$, số đảo ngược của $x$ (ký hiệu $reversed(x)$) là số nguyên mà đảo ngược thứ tự các chữ số trong $x$.

## Ví dụ: 
- $reversed(123)=321$;
- $reversed(21)=12$;
- $reversed(120)=21$.

Số nguyên $x$ được gọi là **beautiful number** nếu $|x-reversed(x)|$ chia hết cho $k$.

**Yêu cầu:** Cho $a,b,k$. Hãy đếm số lượng số nguyên $x\ (a≤x≤b)$ là **beautiful number**.

## Dữ liệu vào:
- Ba số nguyên dương $a,b,k\ (1≤a≤b≤2×10^6;1≤k≤2×10^9)$.

## Dữ liệu ra:
- Số lượng số nguyên $x\ (a≤x≤b)$ là **beautiful number**.

## Ví dụ:
#### Dữ liệu vào:
```
20  23  6
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
- Có $2$ số: $20$ và $22$ là số beautiful number.