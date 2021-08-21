**<center>Nguồn: Beginner Free Contest 5</center>**

Ở một vùng đất xa xôi, có một bầy kiến đang xây tổ. Theo như bản thiết kế của kiến kĩ sư, các kiến thợ phải đào ~N − 1~ đường hầm sao cho từ một khu vực có thể đi đến tất cả các khu vực còn lại. Mặt khác, theo phong thủy, mỗi khu vực ~u~ phải cách khu vực ~v~ xa nó nhất đúng bằng khoảng ~A_u~. Liệu có thể xây dựng được tổ đảm bảo những yêu cầu trên hay không? Bạn hãy giúp kiến kĩ sư kiểm tra nhé.

## Dữ liệu vào:
- Dòng đầu gồm một số nguyên dương ~N~;
- Dòng tiếp theo, gồm ~N~ số ~A_u~ - khoảng cách giữa đỉnh ~u~ và đỉnh xa ~u~ nhất.

## Dữ liệu ra:
- In ra `Possible` nếu tồn tại cách xây. Ngược lại, in ra `Impossible`.
## Ví dụ:
#### Dữ liệu vào:
```
5
3 2 2 3 3
```

## Dữ liệu ra:
```
Possible
```

#### Dữ liệu vào:
```
3
1 1 2
```

## Dữ liệu ra:
```
Impossible
```

#### Giải thích:
- Ở ví dụ ~1~:

<center><img src="/images/problems/624/TREE.png" width=350px></center>

## Giới hạn:
- ~1 ≤ N ≤ 10^5; 1 ≤ A_i < N~.