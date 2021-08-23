Trên trục tọa độ Ox, có hai chú mèo $A$ và mèo $B$. Mèo $A$ ở điểm có tọa độ $x$, mèo $B$ ở điểm có tọa độ $y$. Hai chú mèo đều chạy cùng một vận tốc như nhau và cùng muốn bắt được chú chuột $C$ ở tọa độ $z$.

**Yêu cầu:** Bạn hãy trả lời $q$ câu hỏi dạng $x,y,z$ cho biết chú mèo nào bắt được chuột:
- Nếu mèo $A$ bắt được chuột trước thì in ra: `Cat A`;
- Nếu mèo $B$ bắt được chuột trước thì in ra: `Cat B`;
- Nếu đồng thời cả hai mèo đều bắt được chuột thì in ra: `Mouse C`.

## Dữ liệu vào: 
- Dòng đầu chứa số lượng câu hỏi $t\ (1≤t≤100)$;
- $t$ dòng sau, mỗi dòng chứa một câu hỏi có dạng ba số nguyên dương $x,y,z\ (1≤x,y,z≤100)$.

## Dữ liệu ra:
- Ghi ra trên $t$ dòng, dòng thứ $i$ là đáp án câu hỏi $i$.

## Ví dụ:
### Dữ liệu vào:
```
3
1 2 3
1 3 2
2 1 3
```

### Dữ liệu ra:
```
Cat B
Mouse C
Cat A
```

### Giải thích:
- Câu hỏi $1:$
<center><img src="/images/problems/201/CATS1.png" width="350px" /></center>

- Câu hỏi $2:$
<center><img src="/images/problems/201/CATS2.png" width="350px" /></center>