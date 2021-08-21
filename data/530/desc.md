Năm nay kỳ nghỉ hè mẹ giao cho Tí chăm sóc cây. Vườn cây nhà Tí có $n$ cây trồng thẳng hàng đánh số từ $1$ đến $n$, trước khi giao cho Tí chăm sóc, cây thứ $i$ có chiều cao $h_i$ cm. Mẹ đã lên kế hoạch cho Tí chăm sóc $m$ ngày, ngày thứ $i$, tí cần phải tưới các cây từ $L_i$ đến $H_i$, mỗi ngày một cây được tưới thì sẽ cao thêm $1$ cm. Sau $m$ ngày chăm sóc, Tí cần thống kê để trả lời cho mẹ $q$ câu hỏi, mỗi câu hỏi có dạng: trên đoạn từ $u_i$ đến $v_i$, cây cao nhất có chiều cao là bao nhiêu cm. Bạn hãy giúp Tí trả lời các câu hỏi của mẹ Tí nhé.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên $n, m, q$;
- Dòng thứ hai ghi $n$ số nguyên $h_1, h_2, …, h_n$;
- $M$ dòng tiếp theo, dòng thứ $i$ ghi hai số nguyên dương $L_i, R_i$;
- $Q$ dòng tiếp theo, dòng thứ $i$ ghi hai số nguyên dương $u_i, v_i$.

Hai số liên tiếp trên cùng một dòng được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Ghi trên một dòng $Q$ số nguyên dương, số thứ $i$ là câu trả lời cho câu hỏi thứ $i$, hai số liên tiếp được ghi cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
7 4 3
1 2 1 2 2 1 2
1 3
2 5
1 4
5 7
1 4
3 7
1 7
```

#### Dữ liệu ra:
```
5 4 5
```

## Giới hạn:
- $1 ≤ N, M, Q,, h_i ≤ 10^5; 1 ≤ L_i, R_i, u_i, v_i ≤ N; L_i ≤ R_i; u_i ≤ vi$.