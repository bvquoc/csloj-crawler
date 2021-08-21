**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 3 - Ôn Hải Phòng T11/2020</center>**

Ông Panda biết mèo thích đồ chơi laser và quyết định đầu tư vào đồ chơi laser cho Rar the Cat. Đồ chơi laser mà ông Panda đã mua bao gồm các tia laser cách đều nhau ở đầu đồ chơi, hướng xuống dưới. Tia laser đầu tiên nằm cách mép ngoài cùng ~0.5~ đơn vị và tia laser thứ ~L~ nằm cách mép ngoài cùng bên phải của đồ chơi ~0.5~ đơn vị. Mỗi laser liền kề có khoảng cách ~1~ đơn vị.

Có ~R~ hàng tường trượt, với mỗi hàng chứa một tập hợp các bức tường không chồng chéo. Chính xác, mỗi hàng chứa một số bức tường có tổng chiều dài tối đa ~L~. Các tường này có thể trượt đến bất kỳ vị trí nào trên cùng một hàng, miễn là các vị trí tương đối của chúng dọc theo hàng vẫn giữ nguyên và chúng không trùng nhau. Một bức tường có chiều rộng ~x~ đơn vị (trong đó ~x~ là số nguyên dương) sẽ chặn chính xác ~x~ laser liên tiếp.

Một đồ chơi có thể có ~L = 11~ và ~R = 3~ được mô tả trong sơ đồ bên dưới:
<center><img src="/images/problems/1415/LASERS.png" width="500px" /></center>

Rar the Cat muốn biết: Trong số ~L~ tia laser của đồ chơi, có bao nhiêu tia laser sẽ luôn bị chặn bởi ít nhất một bức tường trong tất cả các cấu hình có thể có của đồ chơi?

## Dữ liệu vào:
- Dòng đầu tiên của đầu vào sẽ chứa hai số nguyên ~L~ và ~R~;
- Các dòng trong ~R~ tiếp theo của đầu vào sẽ mô tả mỗi hàng. Nó sẽ bắt đầu với một số nguyên ~X~ là số lượng tường trượt trong hàng. ~X~ số nguyên theo sau, chỉ ra chiều rộng của các bức tường trong hàng đó, với số nguyên đầu tiên cho biết chiều rộng của bức tường ngoài cùng bên trái. Lưu ý rằng tổng chiều rộng của các bức tường trên mỗi hàng không thể vượt quá đơn vị ~L~.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất trên một dòng là số lượng laser sẽ bị chặn bởi ít nhất một bức tường trong tất cả các cấu hình có thể có của đồ chơi.

### Ví dụ:
#### Dữ liệu vào:
```
11 3
2 2 3
1 7
2 4 1
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
6 2
1 2 3 -10 5 6
```

#### Dữ liệu ra:
```
17
```

#### Dữ liệu vào:
```
6 4
-1 -2 -1 0 -5 -1
```

## Dữ liệu ra:
```
0
```

## Giới hạn:
- ~1≤ R ≤5\times 10^5; 1≤ L ≤10^9; 1≤ ∑X≤5\times 10^5; 1≤∑width≤ L~ ở mỗi hàng.
- Subtask ~\#1: 10\%~ số điểm có ~R =1, X =1~;
- Subtask ~\#2: 14\%~ số điểm khác có ~X =1~;
- Subtask ~\#3: 20\%~ số điểm khác có ~R =2, 1≤ L ≤10^6~;
- Subtask ~\#4: 21\%~ số điểm khác có ~1≤ L ≤10^3, 1≤∑X≤10^3~:
- Subtask ~\#5: 22\%~ số điểm khác có ~1≤ L ≤10^6~;
- Subtask ~\#6: 13\%~ số điểm còn lại không có ràng buộc bổ sung.