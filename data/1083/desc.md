**<center>NGUỒN: ĐỀ THI LẬP ĐỘI TUYỂN HỌC SINH GIỎI CỦA TỈNH DỰ THI CHỌN HỌC SINH GIỎI QUỐC GIA THPT NĂM 2020 TỈNH QUẢNG NINH</center>**
<br>

Một vườn hoa có rất nhiều bông hoa và hai đài phun nước. Bạn có thể lắp bơm áp lực cho hai đài phun nước để tưới cây và có thể điều chỉnh bán kính tưới của hai đài phun nước là $r_1, r_2\ (với r_1, r_2 ≥ 0)$. Mỗi đài phun nước có thể tưới nước cho những bông hoa cách nó không lớn hơn bán kính tưới.

Bạn muốn mọi bông hoa trong vườn đều được tưới nước, đồng thời giá trị $r_1^2 + r_2^2$ là nhỏ nhất. Bạn hãy tìm giá trị nhỏ nhất này.
Hai hình sau minh họa cho $2$ ví dụ ở dưới. Hình bên trái minh họa cho **ví dụ** $1$: $r_1^2 = 5, r_2^2 = 1$ và hình bên phải minh họa cho **ví dụ** $2$: $r_1^2 = 1, r_2^2 = 32$.
<center><img src="/images/problems/1083/fountain.svg" width=600px></center>

## Dữ liệu vào:
- Dòng đầu tiên chứa $5$ số nguyên $N, X_1, Y_1, X_2, Y_2\ (1 ≤ N ≤ 10^5, -10^7 ≤ X_1, Y_1, X_2, Y_2 ≤ 10^7)$ lần lượt là số bông hoa và tọa độ của hai đài phun nước. 
- $N$ dòng tiếp theo, mỗi dòng chứa $2$ số nguyên $x_i, y_i\ (-10^7 ≤ x_i, y_i ≤ 10^7)$ là tọa của bông hoa thứ $i$. Tọa độ các bông hoa và đài phun nước là phân biệt.

## Dữ liệu ra:
- Ghi ra một dòng chứa giá trị $r_1^2 + r_2^2$ nhỏ nhất. Chú ý rằng trong bài toán này câu trả lời luôn là một số nguyên.

## Ví dụ:
#### Dữ liệu vào:
```
2 -1 0 5 3
0 2
5 2
```

#### Dữ liệu ra:
```
6
```

#### Dữ liệu vào:
```
4 0 0 5 0
9 4
8 3
-1 0
1 4
```

#### Dữ liệu ra:
```
33
```

## Giới hạn:
- Có $25\%$ test: $1 ≤ N ≤ 10^2, -10^3 ≤ X_1, Y_1, X_2, Y_2 ≤ 10^3, 10^3 ≤ X_i, Y_i ≤ 10^3$;
- Có $25\%$ test: $1 ≤ N ≤ 10^3, -10^7 ≤ X_1, Y_1, X_2, Y_2 ≤ 10^7, 10^7 ≤ X_i, Y_i ≤ 10^7$;
- Có $25\%$ test: $1 ≤ N ≤ 10^5, -10^3 ≤ X_1, Y_1, X_2, Y_2 ≤ 10^3, 10^3 ≤ X_i, Y_i ≤ 10^3$;
- Có $25\%$ test còn lại: Như ràng buộc trong đề bài.