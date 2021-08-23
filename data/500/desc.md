Một người nông dân muốn cắt một thanh gỗ có độ dài $L$ của mình thành $N$ miếng, mỗi miếng có độ dài là một số nguyên dương $A_i\ (A_1 + A_2 + …+ A_N = L)$. Tuy nhiên để cắt một miếng gỗ có độ dài là $X$ thành hai phần thì ông ta sẽ mất $X$ tiền. Ông nông dân này không giỏi tính toán lắm , vì vậy bạn được yêu cầu lập trình giúp cho ông ta biết cần để dành ít nhất bao nhiêu tiền thì mới có thể cắt được những tấm gỗ như mong muốn.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $N$ là số miếng gỗ cần cắt;
- Dòng thứ hai chứa $N$ số nguyên $A_1, A_2, …, A_n$ là độ dài các miếng gỗ cần cắt thành.

Hai số liên tiếp trên cùng một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là tổng chi phí để cắt thành N miếng gỗ trên.

## Ví dụ:
### Dữ liệu vào:
```
4
1 2 3 4
```

### Dữ liệu ra:
```
19
```

### Giải thích:
- Miếng gỗ có độ dài là $10$ cắt thành hai miếng $4$ và $6$ (chi phí là $10$);
- Cắt miếng độ dài $6$ thành hai miếng $3$ và $3$ (chi phí là $6$);- Cắt miếng độ dài $3$ thành hai miếng $2$ và $1$ (chi phí là $3$);

Tổng chi phí là: $10 + 6 + 3 = 19$.

## Giới hạn:
- $1 ≤ N ≤ 10^5; N ≤ A_1 + A_2 + …+ A_N = L ≤ 10^9$.