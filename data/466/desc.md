Cho chuỗi ký tự ~s~ gồm các ký tự latin in hoa (`A` đến `Z`). Ta gọi một đoạn liên tiếp các ký tự của ~s~ có mặt đủ ~26~ ký tự latin in hoa là một chuỗi con đầy đủ. Hãy tìm một chuỗi con đầy đủ của ~s~ có độ dài ngắn nhất.

## Dữ liệu vào:
- Một dòng duy nhất chứa chuỗi ~s~.

## Dữ liệu ra:
- Một số nguyên dương duy nhất là độ dài chuỗi con đầy đủ ngắn nhất. Nếu không có chuỗi con đầy đủ thì ghi ra ~-1~.

## Ví dụ:
#### Dữ liệu vào:
```
ABCDEFHGJIKLMNOPQRUVXYZTSASCWO
```

#### Dữ liệu ra:
```
28
```

#### Giải thích:
- Đoạn tô đậm và gạch chân sau: A<b><u>BCDEFHGJIKLMNOPQRUVXYZTSASCW</u></b>O có độ dài ~28~ ký tự và có mặt đủ ~26~ ký tự latin in hoa.

## Giới hạn:
- **Subtask** ~\#1: 50\%~ số điểm có độ dài chuỗi ~s~ không quá ~1000~;
- **Subtask** ~\#2: 50\%~ số điểm còn lại có độ dài chuỗi ~s~ không quá ~10^5~.