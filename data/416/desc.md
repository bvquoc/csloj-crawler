Người ta mới tìm ra một loại vi khuẩn mới. Chúng sống thành $N$ bầy, đánh số từ $1$ đến $N$. Ban đầu, mỗi bầy này chỉ có một con vi khuẩn. Tuy nhiên, mỗi giây, số lượng vi khuẩn trong các bầy lại có sự thay đổi. **Ví dụ:**
- Một bầy có thể bị chết đi
- Số lượng vi khuẩn trong một bầy có thể tăng lên
- Một bầy có thể di chuyển vị trí.

Các thay đổi này tuân theo một số quy luật cho trước. Tại mỗi giây chỉ xảy ra đúng một quy luật. Các quy luật này được thực hiện nối tiếp nhau và theo chu kỳ. Có nghĩa là, nếu đánh số các quy luật từ $0$ đến $M – 1$, tại giây thứ $S$ thì quy luật được áp dụng sẽ là $(S – 1)\mod M$.

Nhiệm vụ của bạn là tìm xem, với một bộ các quy luật cho trước, sau $T$ đơn vị thời gian, mỗi bầy có bao nhiêu vi khuẩn.

Các loại quy luật có thể có:
- $A\ i\ 0$: Tất cả các vi khuẩn thuộc bầy $i$ chết $(1 ≤ i  ≤ N)$
- $B\ i\ k$: Số vi khuẩn trong bầy $i$ tăng lên $k$ lần $(1 ≤ i  ≤ N; 0 ≤ k ≤ 10^9)$
- $C\ i\ j$: số vi khuẩn bầy $i$ tăng thêm số lượng bằng với số vi khuẩn bầy $j$ $(1 ≤ i, j  ≤ N)$
- $D\ i\ j$: Các vi khuẩn thuộc bầy $j$ di chuyển toàn bộ sang bầy $i$ $(1 ≤ i, j  ≤ N)$
- $E\ i\ j$: Các vi khuẩn thuộc bầy $i$ và bầy $j$ đổi vị trí cho nhau $(1 ≤ i, j  ≤ N)$
- $F\ 0\ 0$: Vị trí các vi khuẩn di chuyển trên vòng tròn $(1‪→2, 2→3, …, n→1)$.
‬‬‬
## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương $N, M, T$;
- $M$ dòng sau, mỗi dòng chứa một quy tắc dạng $C\ i\ j$ ($C$ là ký tự, $i, j$ là các số nguyên không âm).

Hai số liên tiếp trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Một dòng duy nhất chứa $N$ số là số lượng vi khuẩn của mỗi bầy sau thời gian $T$ (chia co $10^9 + 7$ lấy phần dư)..

## Ví dụ:
#### Dữ liệu vào:
```
4 6 8
A 2 0
B 2 6
C 1 3
D 1 3
E 1 3
F 0 0
```

#### Dữ liệu ra:
```
1 0 0 3
```

## Giải thích:
- Ban đầu số lượng vi khuẩn mỗi bầy là $(1, 1, 1, 1)$
- Sau giấy thứ nhất: bầy số $2$ bị chất hết: $(1, 0, 1, 1)$
- Sau giây thứ $2$: số vi khuẩn bầy $2$ tăng lên $6$ lần: $(1, 0, 1, 1)$
- Sau giây thứ $3$: số vi khẩn bầy $1$ tăng lên một số lượng bằng số lượng vi khẩn bầy $3$: $(2, 0, 1, 1)$
- Sau giây thứ $4$: Các vi khuẩn thuộc bầy $3$ chuyển toàn bộ sang bầy $1$: $(3, 0, 0, 1)$
- Sau giây thứ $5$: Các vi khuẩn bầy $1$ và bầy $3$ đổi chỗ cho nhau: $(0, 0, 3, 1)$
- Sau giây thứ $6$: Hoán vị vòng quanh: $(1, 0, 0, 3)$
- Sau giây thứ $7$: Các vi khẩn bầy $2$ bị chết: $(3, 0, 0, 0)$
- Sau giây thứ $8$: Các vi khuẩn bầy $2$ tăng lên $6$ lần: $(1, 0, 0, 3)$

## Giới hạn:
- $1 ≤ n ≤ 100; 1 ≤ m ≤ 20; 0 ≤ t ≤ 10^{18}$.