Cho một bàn cờ vua kích thước $n×n$, trên mỗi ô của bàn cờ có ghi một con số. Biết ô trên trái của bàn cờ vua là ô trắng (các ô của bàn cờ vua có dạng xen kẽ trắng đen). Các cột được đánh số từ $1$ đến $n$ từ trái sang phải, các hàng được đánh số từ $1$ đến $n$ từ trên xuống dưới. Ô ở hàng $i$, cột $j$ của bàn cờ được ký hiệu là ô $(i, j)$.

Cuội đưa ra những câu đố cho Bờm như sau: Cuội sẽ cho Bờm biết các vùng hình chữ nhật trên bàn cờ, nhiệm vụ của Bờm là phải tính giá trị tuyệt đối của độ chênh lệch giữa tổng giá trị các ô trắng và tổng giá trị các ô đen trên vùng hình chữ nhật đó. Bạn hãy lập trình giúp Bờm trả lời các câu đố của Cuội nhé.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n$;
- $n$ dòng tiếp theo, dòng thứ $i$ chứa $n$ số nguyên dương $a_{i1}, a_{i2}, …, a_{in}$ là các số ghi trên hàng $i$ của bàn cờ (từ trái sang phải), mỗi số cách nhau một dấu cách;
- Dòng tiếp theo ghi số nguyên dương $q$ (là số câu hỏi);
- $q$ dòng tiếp theo, mỗi dòng chứa $4$ số nguyên dương $r_1, c_1, r_2, c_2$ là tọa độ hai đỉnh trên trái và dưới phải của một câu hỏi, mỗi số cách nhau một dấu cách.

## Dữ liệu ra:
- Gồm $q$ dòng, mỗi dòng chứa một số nguyên không âm là các câu trả lời cho $q$ câu hỏi (theo đúng thứ tự câu hỏi).

## Ví dụ:
### Dữ liệu vào:
```
3 
1 3 5
2 4 6
0 10 5
2
1 1 2 2
1 2 3 3
```

### Dữ liệu ra:
```
0
5
```
### Giải thích:
- Ta có bàn cờ và $2$ câu hỏi như sau:
 <center><img src="/images/problems/436/DPBOARD.png" width=600px></center>

- Câu hỏi $1$: Tổng các số trên các ô trắng là $5$, trên các ô đen là $5$, chênh lệch là $0$
- Câu hỏi $2$: Tổng các số trên các ô trắng là $14$, trên các ô đen là $19$, chênh lệch là $5$

## Giới hạn:
- $1 ≤ n ≤ 500, 0 ≤ a_{ij} ≤ 100, 1 ≤ q ≤ 10000, 1 ≤ r_1 ≤ r_2 ≤ n, 1 ≤ c_1 ≤ c_2 ≤ n$.