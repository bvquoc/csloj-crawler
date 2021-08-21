Trường mầm non gồm có ~N~ đứa trẻ đánh số từ ~1~ tới ~N~, mỗi đứa trẻ có một chỉ số là chỉ số sức khỏe. Cô giáo muốn chia lớp thành một số nhóm, mỗi nhóm học sinh là một dãy liên tiếp các em. Mỗi em phải thuộc đúng một nhóm. Mức độ sức khỏe của một nhóm, được định nghĩa là độ chênh lệch lớn nhất của hai em bất kì có trong nhóm đó (nếu nhóm có ~1~ em, thì dĩ nhiên giá trị này bằng ~0~).

Hãy tìm cách chia các em thành một số nhóm, sao cho tổng mức độ sức khỏe của các nhóm là lớn nhất có thể.

## Dữ liệu vào:
- Dòng đầu tiên là số nguyên dương ~N\ (1≤N≤10^6)~;
- Dòng sau gồm ~N~ số nguyên thể hiện sức khỏe của từng em, có giá trị trong đoạn ~[-10^9,10^9]~.

## Dữ liệu ra:
- Số nguyên duy nhất là tổng mức độ sức khỏe lớn nhất có thể.

## Ví dụ:
#### Dữ liệu vào:
```
5
1 2 3 1 2
```

#### Dữ liệu ra:
```
3
```

## Giới hạn:
- ~50\%~ có ~N≤2000~.