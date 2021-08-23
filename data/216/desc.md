HD chơi $n$ game bóng rổ, sau mỗi lần chơi, số điểm HD được ghi lại thành một dãy số $s_0,s_1,s_2,s_3,…s_{n-1}$. Sau game thứ $i$, HD sẽ kiểm tra xem anh ấy có phá vỡ kỷ lục điểm cao nhất hoặc chìm sâu hơn kỷ lục điểm thấp nhất.

**Yêu cầu:** Đếm số lần phá kỷ lục cao điểm nhất và số lần phá kỷ lục điểm thấp nhất của HD.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n\ (1≤n≤1000)$ là số lượng game HD đã chơi;
- Dòng tiếp theo chứa $n$ số nguyên $s_0,s_1,s_2,s_3,…s_{n-1}$ là số điểm của HD $(0≤s_i≤10^8)$.

## Dữ liệu ra:
- Ghi hai số nguyên theo thứ tự là số lần phá kỷ lục cao điểm nhất và số lần phá kỷ lục điểm thấp nhất.

## Ví dụ: 
### Dữ liệu vào:
```
9
10 5 20 20 4 5 2 25 1
```

### Dữ liệu ra:
```
2 4
```

### Dữ liệu vào:
```
10
3 4 21 36 10 28 35 5 24 42
```

### Dữ liệu ra:
```
4 0
```

### Giải thích:
- Test $\#1:$
<center><img src="/images/problems/216/BREAKING1.png" width="500px" /></center>

- Test $\#2:$
<center><img src="/images/problems/216/BREAKING2.png" width="500px" /></center>