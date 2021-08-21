**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T11/2020</center>**

Một bể cá có $𝑛$ loại cá đánh số từ $1$ tới $𝑛$, số lượng cá mỗi loại không hạn chế, mỗi con cá loại $𝑖$ có trọng lượng là $𝑤_𝑖$. Bạn có một con cá ăn thịt trọng lượng $𝑘$ thả thêm vào bể, con cá đó sẽ ăn thịt được những con cá khác có trọng lượng nhỏ hơn hay bằng nó, nếu nó ăn thịt một con cá loại $𝑖$, trọng lượng con cá ăn thịt sẽ tăng lên đúng $𝑤_𝑖$.

**Yêu cầu:** Cho con cá ăn thịt ăn một số ít nhất các con cá khác để trọng lượng của nó lớn hơn hoặc bằng $𝑚$ với $𝑚$ 
cho trước.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $𝑇 ≤ 100$ là số test;
- $𝑇$ nhóm dòng tiếp theo, mỗi nhóm mô tả một test:
    - Dòng đầu chứa ba hai số nguyên dương $𝑛 ≤ 2\times 10^5, 𝑘 ≤ 10^9, 𝑚 ≤ 10^9$;
    - Dòng thứ hai chứa $𝑛$ số nguyên dương $𝑤_1, 𝑤_2, … , 𝑤_𝑛\ (∀_𝑖: 𝑤_𝑖 ≤ 10^9)$.

Tổng các số $𝑛$ trong toàn bộ $𝑇$ test không vượt quá $2\times 10^5$.

## Dữ liệu ra:
- Ứng với mỗi test, ghi ra trên một dòng một số nguyên duy nhất là số con cá khác bị ăn theo phương án tìm được. Nếu không thể làm cho con cá ăn thịt có trọng lượng lớn hơn mọi con cá khác trong bể, in ra số $-1$.

## Ví dụ:
#### Dữ liệu vào:
```
2
6 2 12
1 4 6 8 9 11
3 2 20
1 2 4
```

#### Dữ liệu vào:
```
4
5
```

#### Giải thích:
- Test $1: 2 + 1 + 1 + 4 + 6 = 14 ≥ 12$;
- Test $2: 2 + 2 + 4 + 4 + 4 + 4 = 20 ≥ 20$.