<!--**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T10/2016</center>**-->

Trong một buổi giới thiệu về ẩm thực Việt, có $𝑚$ món ăn và $𝑛$ đồ uống được đưa ra lựa chọn. Biết được $𝑘$ thông tin, mỗi thông tin là một cặp số $(𝑖, 𝑗)$ cho biết món ăn $𝑖$ không được dùng với đồ uống $𝑗$ vì như vậy có thể gây nguy hiểm cho sức khỏe.

Vì thực khách là những người nước ngoài, không biết những thông tin trên, hãy giúp ban tổ chức bày tiệc sao cho trên bàn tiệc không có món ăn và đồ uống nào mà dùng cả hai món đó gây nguy hiểm cho sức khỏe, đồng thời số món ăn + số đồ uống bày lên bàn là nhiều nhất.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương $𝑚, 𝑛, 𝑘 ≤ 10^5$;
- $𝑘$ dòng tiếp theo, mỗi dòng ghi một thông tin $(i, j)$.

## Dữ liệu ra:
- Dòng đầu ghi số món ăn ăn $(𝑝)$ và đồ uống $(𝑞)$ được bày;
- Dòng thứ hai ghi chỉ số của $𝑝$ món ăn được bày;
- Dòng thứ ba ghi chỉ số của $𝑞$ đồ uống được bày.

Các số trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
5 5 8
1 1
1 2
1 3
2 3
3 3
4 4
4 5
5 4
```

#### Dữ liệu ra:
```
3 3
2 3 5
1 2 5
```