Một mạng giao thông có ~N~ nút đánh số từ ~1~ đến ~N~, giữa một số cặp nút có đường đi hai chiều và mạng liên thông. Hiện nay toàn bộ hệ thống đường rất xấu.

Cần chọn một nút đặt trạm cứu hoả và một số đoạn đường để nâng cấp sao cho với hệ thống chỉ gồm những đoạn đường được nâng cấp, từ trạm cứu hoả đến mỗi nút có đúng một đường đi và khoảng cách từ nút xa trạm nhất đến trạm là nhỏ nhất có thể được.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~N~ và ~M~ là số nút giao thông và số tuyến đường hai chiều;
- ~M~ dòng tiếp theo, mỗi dòng chứa ba số nguyên dương ~u, v, w~ với ý nghĩa là có tuyến đường hai chiều nối hai nút ~u, v~ với độ dài ~w~.

## Dữ liệu ra:
- Dòng đầu ghi hai số nguyên dương là ~u~ và ~d~ cho biết nút được chọn làm trạm cứu hỏa và khoảng cách từ nút trạm đến nút xa nhất;
Những dòng sau, mỗi dòng ghi hai số nguyên dương ~u, v~ là hai đầu mút của một tuyến đường cần nâng cấp.

Đối với dữ liệu vào và dữ liệu ra: Hai số liên tiếp trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
5 8
1 2 50
1 3 30
1 4 100
1 5 10
2 3 5
2 4 20
3 4 50
4 5 10
```

#### Dữ liệu ra:
```
4 25
1 5
2 3
2 4
4 5
```

## Giới hạn:
- ~1 ≤ N ≤ 200; 1 ≤ M ≤ 10000; 1 ≤ w ≤ 10000~.