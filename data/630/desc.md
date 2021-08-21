**<center>Nguồn: Beginner Free Contest 7</center>**

Một xâu được gọi là xâu đối xứng nếu đọc xâu đó từ trái sang phải hoặc đọc từ phải sang trái đều như nhau.

**Ví dụ:**
- `aba`, `xyyx`, `zz` là xâu đối xứng.
- `abc`, `xyzy`, `contest` không phải là xâu đối xứng.

Cho xâu ~s~ chỉ gồm các kí tự in thường và số nguyên dương ~k~. Gọi xâu ~t~ là xâu thu được bằng cách viết xâu ~s~ lặp lại liên tiếp ~k~ lần. Hãy cho biết xâu ~t~ có phải là xâu đối xứng hay không.

## Dữ liệu vào:
- Dòng đầu tiên gồm số nguyên ~T\ (1 ≤ T ≤ 20)~ - số bộ dữ liệu vào;
- ~T~ nhóm dòng tiếp theo, mỗi nhóm dòng mô tả một bộ dữ liệu vào gồm hai dòng:
    - Dòng thứ nhất gồm xâu ~s~ có độ dài không vượt quá ~5000~;
    - Dòng thứ hai gồm số nguyên ~k\ (1 ≤ k ≤ 10^{18})~.

## Dữ liệu ra:
- Với mỗi bộ dữ liệu vào, nếu xâu t thu được là xâu đối xứng thì in ra `YES`. Ngược lại, in ra `NO`.

## Ví dụ:
#### Dữ liệu vào:
```
3
aba
3
ccdd
2
freecontest
1
```

## Dữ liệu ra:
```
YES
NO
NO
```

#### Giải thích
- Với bộ dữ liệu vào thứ nhất, ta có ~t =~ `abaabaaba` là một xâu đối xứng.
- Với bộ dữ liệu vào thứ hai, ta có ~t =~ `ccddccdd` không phải là một xâu đối xứng.
- Với bộ dữ liệu vào thứ ba, ta có ~t =~ `freecontest` không phải là một xâu đối xứng.

## Giới hạn:
- **Subtask** ~\#1~ ~(50\%\text{ số điểm}): k ≤ 10~;
- **Subtask** ~\#2~ ~(50\%\text{ số điểm}):~ Không có ràng buộc gì thêm.