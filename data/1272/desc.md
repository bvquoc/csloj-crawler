Mirko đang sinh sống trong một khu rừng rộng lớn có rất nhiều cây cao và vẫn đang lớn lên từng ngày. Khu rừng có thể miêu tả như một bảng $N×N$ ô, mà mỗi ô có chứa $1$ cây. Mirko đã thu thập thông tin, và cô biết được độ cao của mỗi cây, cũng như mức độ tăng trưởng của nó. Cây tăng trưởng liên tục, có nghĩa là nếu mức độ tăng trưởng của một cây là $5$ mét $1$ năm, thì sau nửa năm nó sẽ tăng lên được $2.5$ mét.

Mirko cũng đo được chiều cao của tất cả các cây. Tại mội thời điểm nào đó, một số cây nào đó sẽ có chiều cao bằng nhau, và Mirko tò mò rằng, liệu tại một thời điểm nào đó, vùng liên thông gồm tất cả các cây tại thời điểm đó có chiều cao bằng nhau gồm nhiều nhất là bao nhiêu cây. Hai ô được gọi là kề nhau nếu chúng có chung cạnh. Một vùng liên thông là một vùng mà tất cả các ô có thể đi tới được nhau khi đi qua một số ô kề cạnh với chúng. 

## Dữ liệu vào:
- Dòng đầu là số nguyên $N\ (1≤N≤700)$;
- $N$ dòng sau, mỗi dòng gồm $N$ số, số thứ $j$ của hàng $i$ là giá trị $h_{ij}$ thể hiện chiều cao của câu ở ô $(i, j)\ (h_{ij}≤10^6)$;
- $N$ dòng sau, mỗi dòng gồm $N$ số, số thứ $j$ của hàng $i$ là giá trị $v_{ij}$ thể hiện mức độ tăng trưởng của cây ở ô $(i, j)\ (v_{ij}≤10^6)$.

## Dữ liệu rq:
- Số nguyên duy nhất là kết quả của bài toán.

## Ví dụ:
### Dữ liệu vào:
```
3
1 2 3
3 2 2
5 2 1
3 2 1
1 2 1
1 2 3
```

### Dữ liệu ra:
```
7
```

### Dữ liệu vào:
```
2
3 1
3 3
2 5
2 5
```

### Dữ liệu ra:
```
3
```

## Giới hạn:
- $30\%$ có $N≤70$.